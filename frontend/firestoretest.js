import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";


async function testFirestore() {
    try {
        console.log("Testing Firestore database...");

        // Fetch all todos
        const todosSnapshot = await getDocs(collection(db, "todos"));
        console.log("Todos:");
        todosSnapshot.forEach((doc) => {
            console.log(`ID: ${doc.id}, Data: `, doc.data());
        });

        // Fetch all users
        const usersSnapshot = await getDocs(collection(db, "users"));
        console.log("Users:");
        usersSnapshot.forEach((doc) => {
            console.log(`ID: ${doc.id}, Data: `, doc.data());
        });

        // Check the relationship between todos and users
        todosSnapshot.forEach((todoDoc) => {
            const todoData = todoDoc.data();
            const userId = todoData.user_id;

            const userDoc = usersSnapshot.docs.find((user) => user.id === userId);
            if (userDoc) {
                console.log(`Todo "${todoData.title}" belongs to user "${userDoc.data().username}".`);
            } else {
                console.warn(`Todo "${todoData.title}" has an invalid or missing user_id: ${userId}`);
            }
        });

        console.log("Firestore test completed.");
    } catch (error) {
        console.error("Error testing Firestore:", error);
    }
}

// Call the test function
testFirestore();
