import exp from 'constants';
import mongoose from 'mongoose';

 const todoSchema = new mongoose.Schema(
  {
     name: { type: String, required: true },
     description: { type: String, required: true },
  },
  {
      timestamps: true,
  }
 )

 const Todo = mongoose.model("Todo", todoSchema);

 export default Todo;