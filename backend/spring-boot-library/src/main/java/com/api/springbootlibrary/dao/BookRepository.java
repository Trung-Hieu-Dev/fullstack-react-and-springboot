package com.api.springbootlibrary.dao;

import com.api.springbootlibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepository extends JpaRepository<Book, Long> {
    // search book by title
    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    // search book by category
    Page<Book> findByCategoryContaining(@RequestParam("category") String category, Pageable pageable);
}
