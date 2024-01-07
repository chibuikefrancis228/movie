
import { createAction } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { loadingReducer } from "./loading.reducers"
import { show, hide } from "./loadingactions";
import { LoadingState }  from "./LoadingState";

describe('Loading store', () =>{
    it('show', () =>{
        const initialState: LoadingState = {show: false};
        const newState = loadingReducer(initialState, show());

        expect(newState).toEqual({show: true});
    })

    it('hide', () =>{
        const initialState: LoadingState = {show: true};
        const newState = loadingReducer(initialState, hide());

        expect(newState).toEqual({show: false});
    })

    it('shoulg keep state if action is unknow', () =>{
        const initialState: LoadingState = {show: true};
        const action = createAction("UNKNOWN")
        const newState = loadingReducer(initialState, action);
        

        expect(newState).toEqual({show: true});
    })
})