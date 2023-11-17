package com.fabrizio.biggamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabrizio.biggamesurvey.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
