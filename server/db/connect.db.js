import mongoose from 'mongoose'

const connectDB = async () => {

    const uri = process.env.MONGO_DB_URI;
    if (!uri) {
        console.error("❌ MongoDB URI is not defined in environment variables.");
        process.exit(1);
      }
    
    try {
        const conn = await mongoose.connect(uri);
          console.log(`✅ MongoDB connected: ${conn.connection.host}`);
      } catch (err) {
        console.error("❌ Database connection error:", err);
    process.exit(1);
      }

      // Global mongoose event listeners (bind once)
      mongoose.connection
      .on('connected', () => console.log('🔗 Mongoose connected'))
      .on('error', (err) => console.error('❗ Mongoose error:', err))
      .on('disconnected', () => console.log('🔌 Mongoose disconnected'));

}

export default connectDB;