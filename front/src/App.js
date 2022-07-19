import axios from 'axios';

export default function App() {
  function uploadFile(e) {
    e.preventDefault();
    const file = new FormData();
    file.append('file', e.target.inputFile.files[0]);
    const promise = axios.post('http://localhost:5000/upload', file);
    promise.then(() => {
      alert('Upload finalizado');
    });
  }

  return (
    <form onSubmit={uploadFile}>
      <input type="file" name="inputFile" multiple={false} />
      <br />
      <button type="submit">Fazer upload do arquivo</button>
    </form>
  );
}
