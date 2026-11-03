package com.mediaService.mediaservice.service;

import org.springframework.web.multipart.MultipartFile;

import com.mediaService.mediaservice.entity.MediaFile;

import java.io.IOException;
import java.util.List;

public interface MediaService {
    MediaFile uploadFile(MultipartFile file) throws IOException;
    List<MediaFile> getAllFiles();
    MediaFile getFileById(Long id);
}