const userLists =[
    {
        id :"2",
      name: "John Doe",
      userName: "johndoe123",
      nationality: "USA",
      age: 30
    },
    { id :"1",
      name: "Jane Smith",
      userName: "janesmith456",
      nationality: "Canada",
      age: 25
    },
    {
        id :"1",
      name: "Alice Johnson",
      userName: "alicej",
      nationality: "UK",
      age: 35

    },
    {
        id :"4",
      name: "Bob Brown",
      userName: "bobbrown78",
      nationality: "Australia",
      age: 40,
      friends:[{
        id :"1",
        name: "Jane Smith",
        userName: "janesmith456",
        nationality: "Canada",
        age: 25
      },
      {
        name: "Alice Johnson",
        userName: "alicej",
        nationality: "UK",
        age: 35
      },]
    },
    {
      name: "Emily Davis",
      userName: "emilyd",
      nationality: "USA",
      age: 28
    },
    {
      name: "Michael Wilson",
      userName: "michaelw",
      nationality: "Germany",
      age: 45
    },
   
    
    {
      name: "Karen Wong",
      userName: "karenw",
      nationality: "China",
      age: 29
    },
    {
      name: "Tom Brown",
      userName: "tombrown",
      nationality: "USA",
      age: 27,
      friends:[ {
        name: "Karen Wong",
        userName: "karenw",
        nationality: "China",
        age: 29
      },]
    }
  ];
  const movieList = [
    {
      id: '1',
      name: 'Movie 1',
      yearOfPublication: 2020,
      isInTheater: false
    },
    {
      id: '2',
      name: 'Movie 2',
      yearOfPublication: 2021,
      isInTheater: true
    },
    {
      id: '3',
      name: 'Movie 3',
      yearOfPublication: 2019,
      isInTheater: false
    },
    {
      id: '4',
      name: 'Movie 4',
      yearOfPublication: 2022,
      isInTheater: true
    },
    {
      id: '5',
      name: 'Movie 5',
      yearOfPublication: 2018,
      isInTheater: false
    },
    {
      id: '6',
      name: 'Movie 6',
      yearOfPublication: 2023,
      isInTheater: true
    },
    {
      id: '7',
      name: 'Movie 7',
      yearOfPublication: 2017,
      isInTheater: false
    },
    {
      id: '8',
      name: 'Movie 8',
      yearOfPublication: 2024,
      isInTheater: true
    },
    {
      id: '9',
      name: 'Movie 9',
      yearOfPublication: 2016,
      isInTheater: false
    },
    {
      id: '10',
      name: 'Movie 10',
      yearOfPublication: 2025,
      isInTheater: true
    }
  ];
  
  
  
  module.exports = {userLists, movieList }