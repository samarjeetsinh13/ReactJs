import conf from "../conf/conf"
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Post related Services

    async createPost({title, slug, content, featuredimage, status, userId}){
        return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug,
            {
                title,
                content,
                featuredimage,
                status,
                userId
            }
        )
    }

    async updatePost(slug, {title, content, featuredimage, status}){
        return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteTableId,
            slug,
            {
                title,
                content,
                featuredimage,
                status
            }
        )
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    // queries
    async getposts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries
            )
        } catch (error) {
            console.log(`Error: ${error}`)
        }

    }

    async uploadFile(file){
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    }

    // Upload file return the unique ID of the file

    // That we pass into create file as featuredimage

    async deleteFile(fileId){
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    // don't need to give async so bcs the response is so fast.



    
}

const service = new Service()

export default service 