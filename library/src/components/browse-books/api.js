async function getAllBooks(pageNum, pageSize) {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(
    `/books?pageNum=${pageNum}&pageSize=${pageSize}`,
    requestOptions
  ).then((response) => response.json());
}

async function getAllStudents() {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(`/students`, requestOptions).then((response) => response.json());


}


async function borrowBooks(selectedStudentId,selectedBookIds) {
  console.log(`inside the borrow books:${selectedBookIds}`)
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "book_ids":selectedBookIds,
      "student_id":selectedStudentId,
      "staff_id":1004
      
    }),
  };
  return fetch("/borrowBooks", requestOptions).then((response) => response.json());
}



export { getAllBooks, getAllStudents, borrowBooks };
