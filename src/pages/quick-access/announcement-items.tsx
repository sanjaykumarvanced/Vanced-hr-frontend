import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { themeColors, themeFonts } from "../../configs";
import { useState } from "react";
import {
    useDeleteAnnouncementMutation,
    useGetAnnouncementListQuery,
} from "../../components/apis/addAnnouncementsApi";
import { apiBaseUrl } from "../../components/consts/api-url.const";
import moment from "moment";
import { DeleteIconSvg } from "../../svgs";

export const AnnouncementsItem = ({IsLoggedRole} : any) => {
    const { data, refetch } = useGetAnnouncementListQuery<any>();
    const [deleteItem] = useDeleteAnnouncementMutation();
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleDelete = async (id: number) => {
        try {
            await deleteItem({ id });
            console.log("Item successfully deleted.");
        } catch (error) {
            console.log("Error deleting item:", error);
        }
        refetch();
    };
    return (
        <>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "13px",
                    paddingTop: 0,
                    width: "100%",
                    gap: "20px",
                    overflow: "auto",
                    maxHeight: "693px",
                    height: "100%",
                }}
            >
                {data && data.length !== 0 ? (
                    <Box sx={{ width: "100%" }}>
                        <List
                            sx={{
                                listStyle: "none",
                                padding: 0,
                            }}
                        >
                            {data
                                ?.slice()
                                .reverse()
                                .map((val: any, idx: any) => {
                                    let html = val.description;
                                    return (
                                        <>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    paddingTop: "26px",
                                                    justifyContent: "space-between",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "10px",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            height: 38,
                                                            width: 38,
                                                            borderRadius: "5px",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <img
                                                            src={apiBaseUrl + "/" + val.image.path}
                                                            height={40}
                                                            width={40}
                                                            alt="pic"
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: themeFonts["Poppins-SemiBold"],
                                                                fontSize: "16px",
                                                                color: themeColors["#000000"],
                                                            }}
                                                        >
                                                            {val.employee.firstName} {val.employee.lastName}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: themeFonts["Poppins-Regular"],
                                                                fontSize: "14px",
                                                                color: themeColors["#55A232"],
                                                            }}
                                                        >
                                                            (
                                                            {moment
                                                                .utc(val.date)
                                                                .local()
                                                                .startOf("seconds")
                                                                .fromNow()}
                                                            )
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                {IsLoggedRole ?
                                                    <Button
                                                        sx={{
                                                            height: "20px",
                                                            minWidth: "20px",
                                                            padding: "0px ",
                                                        }}
                                                        onClick={() => handleDelete(val._id)}
                                                    >
                                                        <DeleteIconSvg />
                                                    </Button> : ""}
                                            </Box>

                                            <ListItem
                                                sx={{
                                                    fontFamily: themeFonts["Poppins-SemiBold"],
                                                    fontSize: "14px",
                                                    color: themeColors["#0C345D"],
                                                    paddingTop: "24px",
                                                    paddingBottom: "26px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "start",
                                                    gap: "8px",
                                                }}
                                            >
                                                {val.title}

                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        fontFamily: themeFonts["Poppins-Regular"],
                                                        fontSize: "14px",
                                                        color: themeColors["#000000"],
                                                    }}
                                                >
                                                    <div
                                                        className="announcement-description"
                                                        dangerouslySetInnerHTML={{ __html: html }}
                                                    />
                                                </Typography>
                                                {val.announcementImage && (
                                                    <Box
                                                        sx={{
                                                            paddingTop: "18px",
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                height: 300,
                                                                width: 500,
                                                                borderRadius: "6px",
                                                                overflow: "hidden",
                                                            }}
                                                        >
                                                            <img
                                                                src={apiBaseUrl + "/" + val.announcementImage}
                                                                height={300}
                                                                width={500}
                                                                alt="img"
                                                            />
                                                        </Box>
                                                    </Box>
                                                )}
                                            </ListItem>
                                            <Divider sx={{ width: "100%" }} />
                                        </>
                                    );
                                })}
                        </List>
                    </Box>
                ) : (
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "24px",
                            fontFamily: themeFonts["Poppins-SemiBold"],
                            color: themeColors["#224C78"],
                            textTransform: "capitalize",
                        }}
                    >
                        No Announcements Yet
                    </Typography>
                )}
            </Box>

        </>
    );
};
