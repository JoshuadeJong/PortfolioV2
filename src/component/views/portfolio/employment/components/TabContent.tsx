import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Employment from "type/portfolio/Employment";
import { HighlightText } from "component/typography";
import CompanyLink from "./CompanyLink";

type Props = {
  employment: Employment;
};

function TabContent(props: Props) {
  const { employment } = props;

  return (
    <>
      <Typography variant="h6">
        {employment.title}{" "}
        <HighlightText>
          @{" "}
          <CompanyLink
            name={employment.companyName}
            link={employment.companyLink}
          />
        </HighlightText>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
        }}
      >
        {employment.startDate} -- {employment.endDate}
      </Typography>
      <List>
        {employment.bullet.map((bullet, index) => {
          return (
            <ListItem
              key={`${employment.title}-bullet-${index}`}
              sx={{ display: "list-item", listStyleType: "disclosure-closed" }}
            >
              <ListItemText
                sx={{
                  textSize: "text.body2",
                }}
              >
                {bullet}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default TabContent;
