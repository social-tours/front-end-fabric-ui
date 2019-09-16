import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	EmailShareButton,
	// buttons above / icons below
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
	EmailIcon
} from "react-share";

export interface IEventProps {
    id : string,
    description: string,
    title: string,
    capacity: string,
    timestamp: string,
    schedule?: [],
    size? : string,
    url? : string
}

export class Event extends React.Component<IEventProps, {}> {
  public render(): JSX.Element {
    const siteTextStyles: ITextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold
      }
    };
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular
      }
    };
    const helpfulTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular
      }
    };
    const iconStyles: IIconStyles = {
      root: {
        color: '#0078D4',
        fontSize: 16,
        fontWeight: FontWeights.regular
      }
    };
    const footerCardSectionStyles: ICardSectionStyles = {
      root: {
        borderLeft: '1px solid #F3F2F1'
      }
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
    const footerCardSectionTokens: ICardSectionTokens = { padding: '0px 0px 0px 12px' };
 
    let size = 16;
    let title = "I Have A New Event!";
    let  url = "www.google.com"

    return (
      <Stack tokens={sectionStackTokens}>

        <Card compact onClick={() => {}} tokens={cardTokens}>
          <Card.Item fill>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgxbj2pOE92Dv1vckegWdOeV0VZ53P3iHY_WUg19r75nNHAvI" alt="Placeholder image." />
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
              {this.props.title}
            </Text>
            <Text styles={descriptionTextStyles}>{this.props.description}</Text>
            <Text variant="small" styles={helpfulTextStyles}>
              
            </Text>
          </Card.Section>
          <Card.Section styles={footerCardSectionStyles} tokens={footerCardSectionTokens}>
                         <FacebookShareButton
                            // url={url}
                            quote={"I have a new event!"}
                            hashtag={"#NewEvent"}
                        >
                            <FacebookIcon size={size} />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={url}
                            title={"I have a new event!"}
                            hashtag={"#NewEvent"}
                        >
                            <TwitterIcon size={size} />
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={url} // this can be a public facing page in cavas#2 for followers to see
                            title={"I have a new event!"}
                            windowWidth={750}
                            windowHeight={600}
                        >
                            <LinkedinIcon size={size} />
                        </LinkedinShareButton>
                        <EmailShareButton>
                            <EmailIcon
                                url={url}
                                size={size}
                                subject={"I have a new event!"}
                                seperator={" "}
                                openWindow={true}
                            />
                        </EmailShareButton>
          </Card.Section>
        </Card>
      </Stack>
    );
  }
}