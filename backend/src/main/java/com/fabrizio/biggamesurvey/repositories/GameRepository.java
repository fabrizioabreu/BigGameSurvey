package com.fabrizio.biggamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fabrizio.biggamesurvey.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
