window.openLightbox = function (url) {
  var lb = document.getElementById('lightbox'),
      lbContent = document.getElementById('lbContent');
  if (!lb || !lbContent) return;

  // Clear previous content
  lbContent.innerHTML = '';

  // Show lightbox
  lb.setAttribute('aria-hidden', 'false');
  lb.style.display = 'flex';

  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    var videoId = (url.split('v=')[1] || url.split('/').pop()).split('&')[0];
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '520px';
    lbContent.appendChild(iframe);
    return;
  }

  // Google Drive
  if (url.includes('drive.google.com')) {
    let embedUrl = url.includes('/preview') ? url : url.replace('/view', '/preview');
    var iframe = document.createElement('iframe');
    iframe.src = embedUrl;
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; encrypted-media; fullscreen';
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '520px';
    lbContent.appendChild(iframe);
    return;
  }

  // MP4 file
  if (url.endsWith('.mp4')) {
    var video = document.createElement('video');
    video.controls = true;
    video.autoplay = true;
    video.style.width = '100%';
    var source = document.createElement('source');
    source.src = url;
    source.type = 'video/mp4';
    video.appendChild(source);
    lbContent.appendChild(video);
    return;
  }

  // Fallback
  var a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.textContent = 'Open resource';
  lbContent.appendChild(a);
};
