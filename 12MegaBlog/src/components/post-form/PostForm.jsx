import React, {useCallback, useEffect} from 'react'
import {Input, Button, RTE, Select} from "../index"
import appwriteService from '../../appwrite/config'
import { useForm } from 'react-hook-form'
import {  } from 'react-redux'

function PostForm({post}) {

    const {register, handleSubmit, watch, getValues, setValue, control} = useForm({
        defaultValues:{
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            stauts: post?.stauts || '',
        }
    })

    const navigate = useNavigate()
    const userData = ((state) => state.userData)

    // const submit =  async (data) => {
    //     if(post){
    //         const file = data.image[0]? await appwriteService.uploadFile(data.image[0]) : undefined

    //         if(file){
    //             appwriteService.deleteFile(post.featuredimage)
    //         }

    //         const dbPost = await appwriteService.updatePost(file.$id,{
    //             ...data,
    //             featuredimage: file ? file.$id : undefined
    //         });

    //         if(dbPost){
    //             navigate(`/post/${dbPost.$id}`)
    //         }
    //     }else{
    //         const file = data.image[0]? await appwriteService.uploadFile(data.image[0]) : undefined

    //         if(file){
    //             const fileId = file.$id
    //             data.featuredimage = fileId

    //             const dbPost = await appwriteService.createPost({...data, userId: userData.$id})

    //             if(dbPost){
    //                 navigate(`/post/${dbPost.$id}`)
    //             }
    //         }
    //     }
    // }

    
const submit = async (data) => {
    try {
        let file = null;

        if (data.image?.[0]) {
            file = await appwriteService.uploadFile(data.image[0]);

            if (!file) {
                throw new Error("Image upload failed");
            }
        }

        let dbPost;

        if (post) {
            // Update existing post using its actual document ID
            dbPost = await appwriteService.updatePost(post.$id, {
                title: data.title,
                content: data.content,
                status: data.status,
                featuredimage: file ? file.$id : post.featuredimage
            });

            if (dbPost) {
                // Delete old image only after successful update
                if (file && post.featuredimage) {
                    await appwriteService.deleteFile(post.featuredimage);
                }

                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // Create a new post
            if (!file) {
                throw new Error("Please select a featured image");
            }

            dbPost = await appwriteService.createPost({
                title: data.title,
                slug: data.slug,
                content: data.content,
                status: data.status,
                featuredimage: file.$id,
                userid: userData.$id
            });     

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            } else {
                await appwriteService.deleteFile(file.$id);
            }
        }
    } catch (error) {
        console.error("Failed to submit post:", error);
    }
};


    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string')
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 36)
            .replace(/-+$/g, '')
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title), {shouldValidate:true}) 
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, setValue, slugTransform])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}
import { useNavigate } from 'react-router-dom'

export default PostForm