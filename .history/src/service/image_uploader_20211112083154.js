class ImageUploader {
  async upload(file) {
    const data = new FormDate();
    data.append('file', file);
    data.append('upload_preset', 'hkwojazq');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/demo/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await res.json();
  }
}

export default ImageUploader;
