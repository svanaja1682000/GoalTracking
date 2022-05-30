import React, { useEffect, useState } from "react";
import { getAllBooks, getAllStudents ,borrowBooks} from "./api";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
  {
    name: "Author",
    selector: (row) => row.author,
  },
  {
    name: "Publisher",
    selector: (row) => row.publisher,
  },
  {
    name: "Number of books",
    selector: (row) => row.num_of_books,
  },
];



const BrowseBooks = () => {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState();
  const [selectedBookIds, setSelectedBookIds] = useState([]);
  const [borrowings,setBorrowings]=useState([]);

  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
    //TODO get array of book_id selected and set in a state
    //selectedBookIds(....)
   const selectedBookIds=selectedRows.map((item)=>item.book_id);
   console.log(selectedBookIds);
   setSelectedBookIds(selectedBookIds);

    
  };

  

  useEffect(() => {
    async function getData() {
      const books = await getAllBooks(1, 10);
      setBooks(books);

      const students = await getAllStudents();
      setStudents(students);
      
    }
    getData();
  }, []);

  return (
    <div>
      <DataTable
        columns={columns}
        selectableRows
        onSelectedRowsChange={handleChange}
        data={books}
      />

      <select
        onChange={(e) => {
          console.log("selected student id");
          console.log(e.target.value);
          setSelectedStudentId(e.target.value);
        }}
      >
        {students.map((item) => (
          <option key={item.student_id} value={item.student_id}>
            {item.name}
          </option>
        ))}
      </select>


      <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                console.log(`Inside book borrowings onClick handler selectedStudentId : ${selectedStudentId}`);
                console.log(`Inside  book borrowings onClick handler selectedBookIds ${selectedBookIds}`);
                const borrowings = await borrowBooks(selectedStudentId,selectedBookIds);
              
     
                console.log(`response is ${JSON.stringify(borrowings)}`);
                setBorrowings(borrowings);
                // localStorage.setItem("token", response.token);
                // console.log(`token: ${localStorage.getItem("token")}`);
                // props.onLogin(response.token);
              }}
            >
             Borrow books
            </button>
    </div>
  );
};

export default BrowseBooks;
