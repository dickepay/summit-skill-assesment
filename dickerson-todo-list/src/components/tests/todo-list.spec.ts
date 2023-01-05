
import { mount, shallowMount, VueWrapper  } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { createStore } from "vuex";
import TodoList from "../TodoList.vue";
import * as TodoState  from "../../stores/todos.ts";
import { TodoItem } from "../../models/todo-item";

describe("TodoList.vue", () => {

  const storeSpy = vi.spyOn(TodoState, 'useStore');

  it("should always dispatch 'setTodoList'", () => {

    const actions = {
      setTodoList: vi.fn(),
      addTask: vi.fn(),
      deleteTask: vi.fn(),
    }

    const mockStore = createStore<TodoState>({
      state(){
        return{
          todoList:[new TodoItem(1, 'some task')]
        }
      }
    })

    const dispatchSpy = vi.spyOn(mockStore, 'dispatch');
    storeSpy.mockImplementation(() => {return mockStore});
    
    mount(TodoList, {});

    expect(dispatchSpy).toHaveBeenCalledWith('setTodoList');
  });

  it("should render page content correctly", () => {

    const actions = {
      setTodoList: vi.fn(),
      addTask: vi.fn(),
      deleteTask: vi.fn(),
    }

    const expectedTasks : Array<TodoItem> =  [new TodoItem(1, 'some task'), new TodoItem(1, 'some task'), new TodoItem(2, 'some task'), new TodoItem(3, 'some task')]
    const mockStore = createStore<TodoState>({
      state(){
        return{
          todoList:[...expectedTasks]
        }

      }
    })
    
    storeSpy.mockImplementation(() => {return mockStore});

    const wrapper = mount(TodoList, {});
    expectedTasks.forEach(task => {
      expect(wrapper.find('#TASK-'+task.id.toString()).exists).toBeTruthy();
    })
  });
});

