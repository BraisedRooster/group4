import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    List,
    ListItem,
    Button,
    Container,
    ListItemText,
    Divider,
    IconButton,
    TextField,
    Grid,
} from "@mui/material";
import ButtonAppBar from "../ButtonAppBar";

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [editedUserProfile, setEditedUserProfile] = useState({
        lastName: "Doe",
        firstName: "John",
        email: "johndoe@example.com",
        username: "johndoe123",
        city: "YourCity",
        suburb: "YourSuburb",
        postcode: "12345",
        address: "123 Main Street",
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleFieldChange = (fieldName, value) => {
        setEditedUserProfile({ ...editedUserProfile, [fieldName]: value });
    };

    const containerStyle = {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        height: "100vh",
    };

    return (
        <Container style={containerStyle}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ fontSize: "24px"}}>User Information</Typography>
                </Toolbar>
            </AppBar>
            <div className="user-info">
                <Grid container spacing={2} style={{ height: '80vh' }}>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={editedUserProfile.lastName} />
                            </ListItem>
                            <Divider />
                            {isEditing ? (
                                <ListItem>
                                    <TextField
                                        label="Username"
                                        value={editedUserProfile.username}
                                        onChange={(e) => handleFieldChange("username", e.target.value)}
                                        fullWidth
                                    />
                                </ListItem>
                            ) : (
                                <div>
                                    <ListItem>
                                        <ListItemText primary="Username" secondary={editedUserProfile.username} />
                                    </ListItem>
                                </div>
                            )}
                        </List>
                            <Divider />
                            {isEditing ? (
                                <ListItem>
                                    <TextField
                                        label="Postcode"
                                        value={editedUserProfile.postcode}
                                        onChange={(e) => handleFieldChange("postcode", e.target.value)}
                                        fullWidth
                                    />
                                </ListItem>
                            ) : (
                                <div>
                                    <ListItem>
                                        <ListItemText primary="Postcode" secondary={editedUserProfile.postcode} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            )}
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="First Name" secondary={editedUserProfile.firstName} />
                            </ListItem>
                            <Divider />
                            {isEditing ? (
                                <ListItem>
                                    <TextField
                                        label="City"
                                        value={editedUserProfile.city}
                                        onChange={(e) => handleFieldChange("city", e.target.value)}
                                        fullWidth
                                    />
                                </ListItem>
                            ) : (
                                <div>
                                    <ListItem>
                                        <ListItemText primary="City" secondary={editedUserProfile.city} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            )}

                            {isEditing ? (
                                <ListItem>
                                    <TextField
                                        label="Address"
                                        value={editedUserProfile.address}
                                        onChange={(e) => handleFieldChange("address", e.target.value)}
                                        fullWidth
                                    />
                                </ListItem>
                            ) : (
                                <div>
                                    <ListItem>
                                        <ListItemText primary="Address" secondary={editedUserProfile.address} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            )}
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Email" secondary={editedUserProfile.email} />
                            </ListItem>
                            <Divider />
                            {isEditing ? (
                                <ListItem>
                                    <TextField
                                        label="Suburb"
                                        value={editedUserProfile.suburb}
                                        onChange={(e) => handleFieldChange("suburb", e.target.value)}
                                        fullWidth
                                    />
                                </ListItem>
                            ) : (
                                <div>
                                    <ListItem>
                                        <ListItemText primary="Suburb" secondary={editedUserProfile.suburb} />
                                    </ListItem>
                                    <Divider />
                                </div>
                            )}
                        </List>
                    </Grid>
                </Grid>
            </div>
            {isEditing ? (
                <Button onClick={handleSaveClick} style={{ fontSize: "18px" }}>
                    Save
                </Button>
            ) : (
                <Button onClick={handleEditClick} style={{ fontSize: "18px" }}>
                    Edit
                </Button>
            )}
        </Container>
    );
};

export default ProfilePage;
