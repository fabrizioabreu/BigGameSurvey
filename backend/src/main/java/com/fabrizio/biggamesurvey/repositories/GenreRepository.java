package com.fabrizio.biggamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabrizio.biggamesurvey.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
