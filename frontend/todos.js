import { db } from "./firebase.js";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, getDoc} from "firebase/firestore";

export async function getTodos(userId){
    const todosSnapshot = await getDocs(collection(db, "todos"));
    return todosSnapshot.docs.filter((doc) => doc.data().userId === userId)
    .map((doc) => ({id: doc.id, ...doc.data() }));
}

export async function getDate(userId) {
    const q = query(
        collection(db, "todos"),
        where("userId", "==", userId),
        where("duedate", "!=", null)
    );

    const todoSnapshot = await getDocs(q);
    return todoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
} 


export async function getLatestTodoId(userId) {
    try {
        const todosRef = collection(db,"todos");
        const q = query(
            todosRef,
            where("user_id", "==", userId),
            orderBy("created_at", "desc"),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const latestTodo = querySnapshot.docs[0];
            const latestTodoId = latestTodo.id;
            console.log("latest TodoId:", latestTodoId);
            return latestTodoId;
        } else{
            console.log("No todos found for this user.");
            return null;
        }
    }catch (error){
        console.log("Error fetching latest todo:", error);
    }
}

export async function addTodo(title, priority, duedate, description, userId){
    await addDoc(collection(db, "todos"), {
        title,
        priority,
        duedate,
        description,
        userId,
        completed: false,

    });
    console.log(`TODO ${title} added!`)
}

export async function updateTodo(todoId, updatedData) {
    const todoRef = doc(db, "todos", todoId);
    await updateDoc(todoRef, updatedData);
    console.log("Todo updated!");

}

export async function deleteTodo(todoId){
    const todoRef = doc(db, "todos", todoId);
    await deleteDoc(todoRef);
    console.log("Todo deleted")
}

