export const schema = `#graphql

type Student {
  id: ID!
  name: String!
  email: String!
  enrolledCourses: [Course!]!
}

type Teacher {
  id: ID!
  name: String!
  email: String!
  coursesTaught: [Course!]!
}

type Course {
  id: ID!
  title: String!
  description: String!
  teacherId: String!
  students: [Student!]!
}


type Query {
  # Obtener todos los estudiantes
  students: [Student!]!
  
  # Obtener un estudiante por su ID
  student(id: ID!): Student
  
  # Obtener todos los profesores
  teachers: [Teacher!]!
  
  # Obtener un profesor por su ID
  teacher(id: ID!): Teacher
  
  # Obtener todos los cursos
  courses: [Course!]!
  
  # Obtener un curso por su ID
  course(id: ID!): Course
}

type Mutation {
  # Crear entidades
  createStudent(name: String!, email: String!): Student!
  createTeacher(name: String!, email: String!): Teacher!
  createCourse(title: String!, description: String!, teacherId: ID!): Course!
 
  # Eliminar entidades
  deleteStudent(id: ID!): Boolean!
  deleteTeacher(id: ID!): Boolean!
  deleteCourse(id: ID!): Boolean!
}
`;