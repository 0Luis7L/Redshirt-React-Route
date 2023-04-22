 import {describe, test , expect} from 'vitest'
import { render,screen } from '@testing-library/react';
import App from './App'

describe("first suite",()=>{

    test("first test", ()=>{
        render(<App></App>);

        const rsElem = screen.getAllByText("Project Redshirt",{ strict:false})

        expect(rsElem)

    })
})