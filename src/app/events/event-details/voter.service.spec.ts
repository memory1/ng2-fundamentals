import { VoterService } from "./voter.service";


describe('VoterService',()=>{
    let voterService: VoterService;
    mockHttp;

    beforeEach() =>{
        mockHttp = jasmine.createSpyObj('mockHttp',)
        voterService = new VoterService(mockHttp);

    }
    
})