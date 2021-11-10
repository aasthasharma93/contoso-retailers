package com.contoso.restservice.Model;

//import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.util.Objects;

//@Entity
//@Table(name = "book")

public class Book {
    //private @Id
    long id;
    private @NotBlank String title;
    private @NotBlank String author;
    private String img;
    private double price;
    private String info;
    private int quantity;
    private String isbn;
    private double width;
    private double height;

    public Book(long id, String title, String author, String img, double price, String info, int quantity, String isbn, double width, double height) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.img = img;
        this.price = price;
        this.info = info;
        this.quantity = quantity;
        this.isbn = isbn;
        this.width = width;
        this.height = height;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Book)) return false;
        Book user = (Book) o;
        return Objects.equals(id, user.id);
    }
}