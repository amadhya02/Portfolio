import Code from '@mui/icons-material/Code';
import ListAlt from '@mui/icons-material/ListAlt';
import {
    Dialog,
    DialogContent,
    Tabs,
    Tab,
    Box,
    Button,
    Divider,
    Grid,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import DescriptionCard from './DescriptionCard';
import TechList from './techList';


const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
});

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

function TabPanel({ children, value, index }) {
    return (
        <Box role="tabpanel" hidden={value !== index} sx={{ mt: 2 }}>
            {value === index && <Box>{children}</Box>}
        </Box>
    );
}

const Index = ({ description, techStack, open, handleClose, children, logo }) => {
    const theme = useTheme();
    const [tab, setTab] = useState(0);

    const handleTabChange = (_, newValue) => {
        setTab(newValue);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            scroll="body"
            PaperComponent={motion.div}
            slotProps={{
                paper: {
                    variants: modalVariants,
                    initial: 'hidden',
                    animate: 'visible',
                    exit: 'exit',
                    sx: { borderRadius: 3, overflow: 'hidden' },
                },
                backdrop: {
                    sx: {
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    },
                },
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                <Grid container>
                    {/* Left Panel */}
                    <Grid
                        size={{ xs: 12, md: 5 }}
                        component={motion.div}
                        {...fadeIn(0)}
                        sx={{
                            background: theme.custom.gradients.orangeToYellow,
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            color: '#fff',
                            position: 'relative',
                        }}
                    >
                        {logo && (
                            <Box
                                sx={{
                                    position: { xs: 'inherit', sm: 'absolute' },
                                    display: 'flex',
                                    bottom: 4,
                                    right: 4,
                                    opacity: { xs: 1, sm: 0.75 },
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    width="200"
                                    style={{ objectFit: 'contain', margin: 'auto' }}
                                />
                            </Box>
                        )}
                        <Box>
                            {children}
                        </Box>
                    </Grid>

                    {/* Right Panel with Tabs */}
                    <Grid
                        size={{ xs: 12, md: 7 }}
                        component={motion.div}
                        {...fadeIn(0.2)}
                        sx={{
                            px: { xs: 2, sm: 4 },
                            py: 1,
                            height: { sm: '80vh' },
                            overflowY: 'auto',
                            bgcolor: 'background.paper',
                        }}
                    >
                        <Tabs value={tab} onChange={handleTabChange} variant="fullWidth">
                            <Tab icon={<ListAlt fontSize="medium" />} label="Description" />
                            <Tab icon={<Code fontSize="medium" />} label="Tech Stack" />
                        </Tabs>

                        <TabPanel value={tab} index={0}>
                            <DescriptionCard description={description} />
                        </TabPanel>

                        <TabPanel value={tab} index={1}>
                            <TechList stack={techStack} />
                        </TabPanel>

                        <Divider sx={{ my: 4 }} />
                        <motion.div {...fadeIn(0.3)}>
                            <Button variant="outlined" onClick={handleClose} fullWidth>
                                Close
                            </Button>
                        </motion.div>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default React.memo(Index);
