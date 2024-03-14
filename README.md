# Simple HLS with fMP4

A simple web server that serves fMP4 files over HTTP. Done as a test to learn how fMP4 works.

Use the following `ffmpeg` command from the video dir to build the fragments
```sh
ffmpeg -y \
  -i ../sintel_trailer-1080p.mp4 \
  -force_key_frames "expr:gte(t,n_forced*2)" \
  -sc_threshold 0 \
  -s 1280x720 \
  -c:v libx264 -b:v 1500k \
  -c:a copy \
  -hls_time 2 \
  -hls_playlist_type vod \
  -hls_segment_type fmp4 \
  -hls_segment_filename "fileSequence%d.m4s" \
  prog_index.m3u8
```

Then run the server using
```sh
npm start
```