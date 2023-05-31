import {v4 as uuidv4} from 'uuid'

class Todo{
    key: string
    text: string

    constructor(todoText: string){
        this.text = todoText
        this.key = uuidv4()
    }
}

export default Todo