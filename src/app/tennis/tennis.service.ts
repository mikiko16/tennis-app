import { viewarticle } from './../articles/models/view.model';
import { getarticles } from './models/getarticles.model';
import { Message } from './models/message.model';
import { getChallenges } from './models/getChallenges.model';
import { AuthService } from './../auth/auth.service';
import { findPlayer } from './models/findplayer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myChallenges } from './models/mychallenges.model';
import { CreateArticle } from '../articles/models/create.model';

const appSecret = "2824c8a8370146019a5b1e7a8aeab874";
const appKey = "kid_S1mIOIlIX";

const createEvent = `https://baas.kinvey.com/appdata/${appKey}/events`;
const getAllChalleges = `https://baas.kinvey.com/appdata/${appKey}/events`;
const challenges = `https://baas.kinvey.com/appdata/${appKey}/challenges`;
const deleteChall = `https://baas.kinvey.com/appdata/${appKey}/events/`;
const getmychall = `https://baas.kinvey.com/appdata/${appKey}/challenges`;
const retire = `https://baas.kinvey.com/appdata/${appKey}/challenges/`;
const createArticle = `https://baas.kinvey.com/appdata/${appKey}/articles`;
const getallarticles = `https://baas.kinvey.com/appdata/${appKey}/articles`;
const deletearticle = `https://baas.kinvey.com/appdata/${appKey}/articles/`;
const putArticle = `https://baas.kinvey.com/appdata/${appKey}/articles/`;

@Injectable()

export class TennisService {
    private currentAuthToken : string;
    constructor(private http: HttpClient){}

    private createAuthHeaders(type: string){
        if(type === 'Basic'){
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            })
        }
    }

    createEvent(body: findPlayer) {
        return this.http.post(createEvent, JSON.stringify(body)
    )}

    getAllChallenges() {
        return this.http.get<getChallenges[]>(getAllChalleges)}

    addChallenge(body: Message){
        return this.http.post(challenges, JSON.stringify(body))
    }

    deleteChallenge(id: string){
        return this.http.delete(deleteChall + id)
    }

    getmychallenges(){
        return this.http.get<myChallenges[]>(getmychall)
    }

    retireChallenge(id: string){
        return this.http.delete(retire + id)
    }

    createArticle(body: CreateArticle){
        return this.http.post(createArticle,JSON.stringify(body))
    }

    getArticles() {
        return this.http.get<getarticles[]>(getallarticles
        )
    }

    deletearticle(id: string){
        return this.http.delete(deletearticle + id)
    }

    getArticleById(id: string){
        return this.http.get<getarticles[]>(deletearticle + id)
    }

    editArticle(id: string, body: getarticles){
        return this.http.put(putArticle + id, body)
    }

    viewarticle(id: string){
        return this.http.get<viewarticle>(deletearticle + id)
    }
}