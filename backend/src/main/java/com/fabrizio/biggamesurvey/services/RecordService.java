package com.fabrizio.biggamesurvey.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fabrizio.biggamesurvey.dtos.RecordDTO;
import com.fabrizio.biggamesurvey.dtos.RecordInsertDTO;
import com.fabrizio.biggamesurvey.entities.Game;
import com.fabrizio.biggamesurvey.entities.Record;
import com.fabrizio.biggamesurvey.repositories.GameRepository;
import com.fabrizio.biggamesurvey.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository repository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();

		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());

		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDTO(entity);
	}

}
