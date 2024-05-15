/**
 * @jest-environment node
 */

import { createMocks } from "node-mocks-http"
import { GET } from "./route"

describe('/api/hello', () => {
    test('should return a greeting message', async () => {
        // Create mock request and response objects
        const { req } = createMocks({
            method: 'GET',
        })

        // Call the route function with the mock objects
        const res = await GET();

        // Assert the expected behavior
        expect(res._getStatusCode()).toBe(200)
        expect(res._getData()).toEqual({ message: 'Hello World' })
    })
});