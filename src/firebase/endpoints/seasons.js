import { doc , getDoc, collection, getDocs, query, orderBy, where, limit, setDoc, deleteDoc, addDoc, getDocFromCache, getDocsFromCache, startAfter, Timestamp} from 'firebase/firestore';
import { db, storage } from '../firebase';
import axios from 'axios'

export const getSeasonDetail=  async (id, season)=>{
    //api
    try {
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        if(typeof Number(id) !== 'number'){
            response = { success:false, message:'Id value is not valid' };
            return response;
        }
        const patch = 'https://api.themoviedb.org/3/tv/'+Number(id)+'/season/'+Number(season)+'?api_key=70e07702fea1b3da15a2e2fee1d08057&language=es'
        const request = await axios.get(patch)
        response = { success:true, message:'Detalle de la temporada', data: request.data};
        return response
    } catch (error) {  
        let response = { success:false, message:error.message };
        console.log(response)
        return response
    }
}

export const postSeason=  async (data)=>{
    //Firebase
    try { 
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const {id} = data
        data = {...data , updated_date:Timestamp.now(), created_date:Timestamp.now()}
        const selectedDoc = doc(db, `seasons/${id}`);
        const resolved = await setDoc(selectedDoc, data)
        response = { success:true, message:'Temporada cargada a firebase', data: resolved};
        console.log(response)
        return response
    } catch (error) {
        let response = { success:false, message:error.message };
        console.log(response)
        return response
    }
}

export const DeleteSeason=  async (id)=>{
    //Firebase
    try { 
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        const selectedDoc = doc(db, `seasons/${id}`);
        const resolved = await deleteDoc(selectedDoc)
        response = { success:true, message:'Temporada eliminada de firebase', data: resolved};
        console.log(response)
        return response
    } catch (error) {
        let response = { success:false, message:error.message };
        console.log(response)
        return response
    }
}

export const getSeasonDetailFirebase=  async (id)=>{
    //Firebase
    try {
        let response = { success:false, message:'Reintente nuevamente en unos momentos' };
        if(typeof Number(id) !== 'number'){
            response = { success:false, message:'Id value is not valid' };
            console.log(response);
            return response;
        }
        const selectedDoc = doc(db, 'seasons/'+id)

        const requestSnapshotCache = await getDoc(selectedDoc, { source: 'cache' })
        if (requestSnapshotCache.exists()){
            const movieData = { ...requestSnapshotCache.data(), id: requestSnapshotCache.id };
            response = { success:true, message:`Datos obtenidos desde el cache season ${id}`, data: movieData};
        }else{
            const requestSnapshot = await getDoc(selectedDoc)
            if(requestSnapshotCache.exists()){
                const movieData = { ...requestSnapshot.data(), id: requestSnapshot.id };
                response = { success:true, message:`Datos obtenidos desde el servidor season ${id}`, data: movieData};
            }else{
                response = { success:false, message:`No existe el documento season ${id}`, data:null};
            }
            
        }
        return response
    } catch (error) {
        let response = { success:false, message:error.message };
        console.log(response)
        return response
    }
}