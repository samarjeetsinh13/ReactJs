import React from 'react'
import ReactQuill from 'react-quill-new'
import { Controller } from 'react-hook-form'
import 'react-quill-new/dist/quill.snow.css'

export default function RTE({
    name = 'content',
    control,
    label,
    defaultValue = ''
}) {
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1">
                    {label}
                </label>
            )}

            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <ReactQuill
                        theme="snow"
                        value={field.value ?? ''}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    />
                )}
            />
        </div>
    )
}