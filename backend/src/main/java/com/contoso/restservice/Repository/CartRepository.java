package com.contoso.restservice.Repository;

import com.contoso.restservice.Model.Book;
import com.contoso.restservice.Model.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

//mock database operations
@Repository
public class CartRepository {

    @Autowired
    BookRepository books;
    private List<Cart> cart;

    CartRepository() {
        //dummy for testing
        cart = new ArrayList<Cart>();
    }

    public List<Cart> findAllByUser(String user) {
        return cart.stream().filter(item -> item.getUser().equalsIgnoreCase(user)).collect(Collectors.<Cart>toList());
    }

    public void save(Cart newUser) {
        cart.add(newUser);
    }

    public void deleteAll() {
        cart.clear();
    }

    public Book findBook(int bookId){
        return books.findAll().get(bookId);
    }

    public void addToCart(int bookId, String user) {
        Book book = findBook(bookId - 1);

        boolean doesBookExistInCart = cart.stream().anyMatch(o -> o.getBook().equals(book));
        if (doesBookExistInCart) {
            for (Cart cartItem : cart) {
                if (cartItem.getBook().equals(book)) {
                    cartItem.setInCartQuantity(cartItem.getInCartQuantity() + 1);
                    break;
                }
            }
        } else {
            cart.add(new Cart(cart.size() + 1, user, book, 1));
        }

        book.setQuantity(book.getQuantity() - 1);
        int a = 2;
    }


    public void cartItemDecrement(int id, String user) {
        Book book = books.findAll().get(id - 1);
        boolean doesBookExistInCart = cart.stream().anyMatch(o -> o.getBook().equals(book));
        if (doesBookExistInCart) {
            for (Cart cartItem : cart) {
                if (cartItem.getBook().equals(book)) {
                    cartItem.setInCartQuantity(cartItem.getInCartQuantity() - 1);
                    break;
                }
            }
        }
        cart.removeIf(t -> t.getInCartQuantity() <= 0);
        book.setQuantity(book.getQuantity() + 1);
    }

    public void cartItemIncrement(int id, String user) {
        Book book = findBook(id - 1);
        boolean doesBookExistInCart = cart.stream().anyMatch(o -> o.getBook().equals(book));
        if (doesBookExistInCart) {
            for (Cart cartItem : cart) {
                if (cartItem.getBook().equals(book)) {
                    cartItem.setInCartQuantity(cartItem.getInCartQuantity() + 1);
                    break;
                }
            }
        } else {
            cart.add(new Cart(cart.size() + 1, user, book, 1));
        }
        book.setQuantity(book.getQuantity() - 1);
    }

    public void cartItemRemove(int id, String user) {
        Book book = findBook(id - 1);
        boolean doesBookExistInCart = cart.stream().anyMatch(o -> o.getBook().equals(book));
        if (doesBookExistInCart) {
            for (Cart cartItem : cart) {
                if (cartItem.getBook().equals(book)) {
                    book.setQuantity(book.getQuantity() + cartItem.getInCartQuantity());
                    break;
                }
            }
        }
        cart.removeIf(t -> t.getBook().equals(book));
    }

    public void clearCart(String user) {
        List<Book> allBooks = books.findAll();
        for (Book book : allBooks) {
            for (Cart c : cart) {
                if (c.getBook().equals(book)) {
                    book.setQuantity(c.getInCartQuantity() + book.getQuantity());
                }
            }
        }
        cart.clear();
    }
}
