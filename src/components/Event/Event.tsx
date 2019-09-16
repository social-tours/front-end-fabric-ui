import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { FontWeights } from '@uifabric/styling';
import { Icon, IIconStyles, Image, Stack, IStackTokens, Text, ITextStyles } from 'office-ui-fabric-react';

export interface IEventProps {
    id : string,
    description: string,
    title: string,
    capacity: string,
    timestamp: string,
    schedule?: []
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
            <Icon iconName="RedEye" styles={iconStyles} />
            <Icon iconName="SingleBookmark" styles={iconStyles} />
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <Icon iconName="MoreVertical" styles={iconStyles} />
          </Card.Section>
        </Card>
      </Stack>
    );
  }
}