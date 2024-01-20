import test from 'node:test';
import * as assert from "node:assert";
import {sayBye, sayHello} from "./main";

test("say hello" , (t) => {
    assert.equal(sayHello(), "Hello");
})

test("say bye" , (t) => {
    assert.equal(sayBye(), "Bye");
})