
import { NextResponse } from "next/server"
import { createHash } from "crypto"

export const response = (success, statusCode, message, data = {}) => {
    return NextResponse.json(
        { success, statusCode, message, data },
        { status: statusCode }
    )
}

export const catchError = (error, customMessage) => {
    // handling duplicate key error 
    if (error.code === 11000) {
        const keys = Object.keys(error.keyPattern).join(',')
        error.message = `Duplicate fields: ${keys}. These fields value must be unique.`
        error.statusCode = 409
    }


    let errorObj = {}

    const statusCode = (() => {
        if (typeof error.statusCode === 'number') return error.statusCode
        if (typeof error.status === 'number') return error.status
        if (error.code && typeof error.code === 'number' && error.code >= 400 && error.code < 600) {
            return error.code
        }
        return 500
    })()

    if (process.env.NODE_ENV === 'development') {
        errorObj = {
            message: error.message,
            error
        }
    } else {
        errorObj = {
            message: customMessage || 'Internal server error.',
        }
    }

    return NextResponse.json(
        {
            success: false,
            statusCode,
            ...errorObj
        },
        { status: statusCode }
    )

}

export const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    return otp
}

export const hashOTP = (otp) => {
    return createHash('sha256').update(otp).digest('hex')
}


export const columnConfig = (column, isCreatedAt = false, isUpdatedAt = false, isDeletedAt = false) => {
    const newColumn = [...column]

    if (isCreatedAt) {
        newColumn.push({
            accessorKey: 'createdAt',
            header: 'Created At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }
    if (isUpdatedAt) {
        newColumn.push({
            accessorKey: 'updatedAt',
            header: 'Updated At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }
    if (isDeletedAt) {
        newColumn.push({
            accessorKey: 'deletedAt',
            header: 'Deleted At',
            Cell: ({ renderedCellValue }) => (new Date(renderedCellValue).toLocaleString())
        })
    }

    return newColumn
}

export const statusBadge = (status) => {
    const statusColorConfig = {
        pending: 'bg-blue-500',
        processing: 'bg-yellow-500',
        shipped: 'bg-cyan-500',
        delivered: 'bg-green-500',
        cancelled: 'bg-red-500',
        unverified: 'bg-orange-500',
    }
    return <span className={`${statusColorConfig[status]} capitalize px-3 py-1 rounded-full text-xs`}>{status}</span>
}
