import firebase from "../firebase";

const db = firebase.collection("/cartoons");

class CartoonDataService {
  getAll() {
    return db;
  }

  create(cartoon) {
    return db.add(cartoon);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}
// eslint-disable-next-line
export default new CartoonDataService();