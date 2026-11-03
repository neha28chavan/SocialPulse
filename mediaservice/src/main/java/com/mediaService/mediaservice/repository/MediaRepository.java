package com.mediaService.mediaservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mediaService.mediaservice.entity.MediaFile;

@Repository
public interface MediaRepository extends JpaRepository<MediaFile , Long> {
}