"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Outer Describe block', function () {
    afterAll(function () {
        console.log("After All in top describe block");
    });
    it('first it block in top describe block', function () {
        console.log("test One in top describe block");
    });
    it('second it block in top describe block', function () {
        console.log("test two in top describe block");
    });
    describe('inner describe block one', function () {
        beforeAll(function () {
            console.log("Before All block in inner describe block one");
        });
        it('inner it block', function () {
            console.log("test One in inner describe block one");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdHMvZW1haWxUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsUUFBUSxDQUFDLHNCQUFzQixFQUFFO0lBQ2hDLFFBQVEsQ0FBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLDBCQUEwQixFQUFFO1FBQ3BDLFNBQVMsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=