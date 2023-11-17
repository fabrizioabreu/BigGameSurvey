package com.fabrizio.biggamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabrizio.biggamesurvey.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
