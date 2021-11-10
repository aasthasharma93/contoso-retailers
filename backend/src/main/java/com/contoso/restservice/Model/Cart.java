package com.contoso.restservice.Model;



//@Entity
//@Table(name = "cart")
public class Cart {

    long id;

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    private String user;
    //for test purposes - to incorporate joins
    private Book book;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public int getInCartQuantity() {
        return inCartQuantity;
    }

    public void setInCartQuantity(int inCartQuantity) {
        this.inCartQuantity = inCartQuantity;
    }

    private int inCartQuantity;

    public Cart(long id, String user, Book book, int inCartQuantity) {
        this.id = id;
        this.user = user;
        this.book = book;
        this.inCartQuantity = inCartQuantity;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

}