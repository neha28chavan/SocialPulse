package com.mediaService.mediaservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.mediaService.mediaservice.entity.MediaFile;
import com.mediaService.mediaservice.service.MediaService;

import java.util.List;

@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @PostMapping("/upload")
    public ResponseEntity<MediaFile> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            MediaFile uploadedFile = mediaService.uploadFile(file);
            return ResponseEntity.status(HttpStatus.CREATED).body(uploadedFile);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<MediaFile>> getAllMedia() {
        return ResponseEntity.ok(mediaService.getAllFiles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<MediaFile> getMediaById(@PathVariable Long id) {
        MediaFile file = mediaService.getFileById(id);
        if (file != null) {
            return ResponseEntity.ok(file);
        }
        return ResponseEntity.notFound().build();
    }
}
