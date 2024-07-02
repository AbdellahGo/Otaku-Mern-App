import mongoose from "mongoose";


const otakuSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        type: {
            type: String,
            require: true,
        },
        releaseDate: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            require: true,
        },
        chapters: {
            type: String,
            require: true,
        },
        lastWatch: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true,
        },
        genres: {
            type: [String],
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        source: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
    }
)
export const Otaku = mongoose.model('Otaku', otakuSchema);
