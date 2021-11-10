package com.contoso.restservice.Repository;

import com.contoso.restservice.Model.Book;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

//mock db operations
@Repository
public class BookRepository {

    private List<Book> books;


    public List<Book> findAll() {
        return books;
    }

    public void save(Book newUser) {
        books.add(newUser);
    }

    public void deleteAll() {
        books.clear();
    }

    //Dummy values for Testing
    BookRepository() {
        books = new ArrayList<Book>();
        books.add(new Book(1, "The Kite Runner",
                "Khaled Hosseini",
                "https://images-na.ssl-images-amazon.com/images/I/51gLDYDttoL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
                10,
                "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed." +
                        " It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies. A sweeping story of family, love, and friendship told against " +
                        "the devastating backdrop of the history of Afghanistan over the last thirty years" +
                        ", The Kite Runner is an unusual and powerful novel that has become a beloved, one-of-a-kind classic.",
                2, "978-3-16-148410-0", 2, 4));
        books.add(new Book(2, "The Alchemist",
                "Paulo Coelho",
                "https://images-na.ssl-images-amazon.com/images/I/51NRkX2bPbL.jpg",
                16,
                "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed." +
                        " It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies. A sweeping story of family, love, and friendship told against " +
                        "the devastating backdrop of the history of Afghanistan over the last thirty years" +
                        ", The Kite Runner is an unusual and powerful novel that has become a beloved, one-of-a-kind classic.",
                4, "978-3-16-148410-0", 2, 4));
        books.add(new Book(3, "Da Vinci Code",
                "Dan Brown",
                "https://images-na.ssl-images-amazon.com/images/I/513jDWxi4nL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
                16,
                "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. " +
                        "The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols." +
                        " As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned " +
                        "to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet " +
                        "ingeniously disguised by the painter.",
                2, "978-3-16-148410-0", 2, 4));
        books.add(new Book(4, "Anne of Green Gables",
                "L.M. Montgomery",
                "https://images-na.ssl-images-amazon.com/images/I/515g2CtEjgL._SX326_BO1,204,203,200_.jpg",
                13,
                "This heartwarming story has beckoned generations of readers into the special world of Green Gables," +
                        " an old-fashioned farm outside a town called Avonlea. Anne Shirley, an eleven-year-old orphan," +
                        " has arrived in this verdant corner of Prince Edward Island only to discover that the Cuthberts—elderly" +
                        " Matthew and his stern sister, Marilla—want to adopt a boy, not a feisty redheaded girl. " +
                        "But before they can send her back, Anne—who simply must have more scope for her imagination " +
                        "and a real home—wins them over completely.",
                8, "978-3-16-148410-0", 2, 4));
        books.add(new Book(5, "Harry Potter and The Philosopher's Stone",
                "J.K. Rowling",
                "https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
                24,
                "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, " +
                        "who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a" +
                        " letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from " +
                        "his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
                6, "978-3-16-148410-0", 2, 4));
        books.add(new Book(6, "A Thousand Splendid Suns",
                "Khaled Hosseini",
                "https://images-na.ssl-images-amazon.com/images/I/51lMWHJQ3HL._SX316_BO1,204,203,200_.jpg",
                6,
                "A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, " +
                        "following the huge success of his bestselling 2003 debut The Kite Runner. " +
                        "Mariam, an illegitimate teenager from Herat, is forced to marry a shoemaker from Kabul after a family tragedy.",
                10, "978-3-16-148410-0", 2, 4));
        books.add(new Book(7, "The Fault in Our Stars",
                "John Green",
                "https://images-na.ssl-images-amazon.com/images/I/51ED6WxFy8L._SY264_BO1,204,203,200_QL40_ML2_.jpg",
                20,
                "Despite the tumor-shrinking medical miracle that has bought her a few years, " +
                        "Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis." +
                        " But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group," +
                        " Hazel's story is about to be completely rewritten.",
                4, "978-3-16-148410-0", 2, 4));
        books.add(new Book(8, "The White Tiger",
                "Aravind Adiga",
                "https://images-na.ssl-images-amazon.com/images/I/519wPCKPeUL._SX331_BO1,204,203,200_.jpg",
                16,
                "The White Tiger is a novel by Indian author Aravind Adiga. " +
                        "It was published in 2008 and won the 40th Man Booker Prize the same year. " +
                        "The novel provides a darkly humorous perspective of India's class struggle in a globalized world " +
                        "as told through a retrospective narration from Balram Halwai, a village boy.",
                5, "978-3-16-148410-0", 2, 4));
    }
}
