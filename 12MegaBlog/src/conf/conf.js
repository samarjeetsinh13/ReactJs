const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL?.trim() ?? "",
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID?.trim() ?? "",
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID?.trim() ?? "",
    appwriteTableId: import.meta.env.VITE_APPWRITE_TABLE_ID?.trim() ?? "",
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID?.trim() ?? ""
}

export default conf