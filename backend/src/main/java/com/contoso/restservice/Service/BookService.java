package com.contoso.restservice.Service;


import com.contoso.restservice.Model.Book;
import com.contoso.restservice.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public List<Book> getAllBooks() {
        List<Book> booksInventory = bookRepository.findAll();
        return booksInventory;
    }
}
