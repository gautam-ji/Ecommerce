import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
        cloudinary.config({
            cloud_name: 'dpayfvjrm',
        api_key: '595769417841349',
        api_secret: 'ow7C5B8QvJLMwE0G35VwuWfHxVg'
        })

}

export default connectCloudinary;

