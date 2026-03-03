import { Hero } from '../components/Hero';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { UIArchive } from '../components/UIArchive';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ProjectsGrid />
            <UIArchive />
        </motion.div>
    );
};
