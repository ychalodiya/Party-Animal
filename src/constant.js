// one way: useful way
// Named Export
// You can have as many named exports as you like 
export const PARTYANIMALS_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYThjYzA2OTM0NmY0NDY5NWUyMzhkYyIsImlhdCI6MTU1NDU2NjI3MiwiZXhwIjoxNTU3MTU4MjcyfQ.WFN9ruqU9Or2QMPbtNLAlSXADnpXk85CZQ9T32ILdy0';

export const PARTYANIMALS_API_URL = 'https://partyanimals.hackeryou.com/api/v1/venue/';

// second way: boring
// Default Export : Unnamed
// There an only be one
export default {
    PARTYANIMALS_API_KEY,
    PARTYANIMALS_API_URL
};