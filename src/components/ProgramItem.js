import DOMPurify from 'dompurify';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from 'react-spring';
import { IoChevronDownCircle } from 'react-icons/io5';
import { HiLink } from 'react-icons/hi';
import { LocalTime } from '../utils/LocalTime';
import ItemLink from './ItemLink';
import Location from './Location';
import Tag from './Tag';
import Participant from './Participant';
import configData from '../config.json';
import PropTypes from 'prop-types';
import EcoTwoToneIcon from '@material-ui/icons/EcoTwoTone';
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';
import TranslateIcon from '@mui/icons-material/Translate';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';

const ProgramItem = ({ item, forceExpanded }) => {
	const selected = useStoreState((state) => state.isSelected(item.id));
	const { addSelection, removeSelection } = useStoreActions((actions) => ({
		addSelection: actions.addSelection,
		removeSelection: actions.removeSelection,
	}));

	const expanded = useStoreState((state) => state.isExpanded(item.id));
	const { expandItem, collapseItem } = useStoreActions((actions) => ({
		expandItem: actions.expandItem,
		collapseItem: actions.collapseItem,
	}));

	function toggleExpanded() {
		if (configData.INTERACTIVE) {
			if (expanded) {
				// Check for selection text. Only collapse if empty so users can select items.
				if (window.getSelection().toString() === '') collapseItem(item.id);
			} else expandItem(item.id);
		}
	}

	function handleSelected(event) {
		if (event.target.checked) addSelection(item.id);
		else removeSelection(item.id);
	}

	let id = 'item_' + item.id;
	const locations = [];
	if (Array.isArray(item.loc))
		for (let loc of item.loc) {
			locations.push(<Location key={loc} loc={loc} />);
		}
	else locations.push(<Location key={item.loc} loc={item.loc} />);

	const permaLink =
		configData.PERMALINK.SHOW_PERMALINK && configData.INTERACTIVE ? (
			<div className="item-permalink">
				<Link
					to={'/id/' + item.id}
					title={configData.PERMALINK.PERMALINK_TITLE}
				>
					<HiLink />
				</Link>
			</div>
		) : (
			''
		);

	const tags = [];
	const itemTags = item.tags.filter(
		(tag) => !configData.TAGS.DONTLIST.includes(tag.category)
	);
	for (const tag of itemTags) {
		tags.push(<Tag key={tag.value} tag={tag.label} />);
	}

	const people = [];
	if (item.people) {
		item.people.forEach((person) => {
			people.push(
				<Participant
					key={person.id}
					person={person}
					moderator={person.id === item.moderator}
				/>
			);
		});
	}
	const safeDesc = DOMPurify.sanitize(
		item.desc,
		configData.ITEM_DESCRIPTION.PURIFY_OPTIONS
	);

	const links = [];
	if (configData.LINKS) {
		configData.LINKS.forEach((link) => {
			if (item.links && item.links[link.NAME] && item.links[link.NAME].length) {
				links.push(
					<ItemLink
						key={link.NAME}
						name={'item-links-' + link.NAME}
						link={item.links[link.NAME]}
						text={link.TEXT}
					/>
				);
			}
		});
	}

	const iconColor = '--green-leaf-fill'; // Define a CSS variable

	const greenLeaf =
		item.green_leaf == true ? (
			<Tooltip
				disableFocusListener
				title={
					<span style={{ fontSize: '1rem' }}>
						Punkt przyjazny dla osób, które nigdy nie były na konwencie
					</span>
				}
				placement="top"
				arrow
			>
				<EcoTwoToneIcon
					fontSize="large"
					style={{ color: `var(${iconColor})` }}
				/>{' '}
			</Tooltip>
		) : (
			''
		);
	const access =
		item.handicap_friendly != true ? (
			<Tooltip
				disableFocusListener
				title={
					<span style={{ fontSize: '1rem' }}>
						Żeby dostać się do sali trzeba pokonać schody na 1. piętro. Brak
						windy dla osób na wózkach.
					</span>
				}
				placement="top"
				arrow
			>
				<NotAccessibleIcon fontSize="large" />{' '}
			</Tooltip>
		) : (
			''
		);
	const sponsor =
		item.sponsored == true ? (
			<Tooltip
				disableFocusListener
				title={
					<span style={{ fontSize: '1rem' }}>
						Punkt prowadzony przez jednego z&nbsp;naszych sponsorów
					</span>
				}
				placement="top"
				arrow
			>
				<HandshakeIcon fontSize="large" />{' '}
			</Tooltip>
		) : (
			''
		);
	const translation =
		item.translated == true ? (
			<Tooltip
				disableFocusListener
				title={
					<span style={{ fontSize: '1rem' }}>
						Punkt tłumaczony symultanicznie z&nbsp;języka angielskiego
					</span>
				}
				placement="top"
				arrow
			>
				<TranslateIcon fontSize="large" />{' '}
			</Tooltip>
		) : (
			''
		);
	const signUp =
		item.early_access == true ? (
			<Tooltip
				disableFocusListener
				title={
					<span style={{ fontSize: '1rem' }}>
						Punkt z&nbsp;możliwością wcześniejszego zapisania się
					</span>
				}
				placement="top"
				arrow
			>
				<EditIcon fontSize="large" />{' '}
			</Tooltip>
		) : (
			''
		);
	const keywords =
		item.keywords !== '' ? (
			<div className="item-tags">
				{' '}
				<b>{'Słowa kluczowe: '}</b> {item.keywords}
			</div>
		) : (
			''
		);
	const ageRestrictions =
		item.age_restrictions !== '' ? (
			<div className="item-tags">
				<b>{'Ograniczenia wiekowe: '}</b> {item.age_restrictions}
			</div>
		) : (
			''
		);
	const triggers =
		item.triggers !== '' ? (
			<div className="item-tags">
				<b>{'Triggery: '}</b> {item.triggers}
			</div>
		) : (
			''
		);
	const safetyTools =
		item.safety_tools !== '' ? (
			<div className="item-tags">
				<b>{'BHS: '}</b> {item.safety_tools}
			</div>
		) : (
			''
		);

	const playersSection =
		item.max_players === '' && item.min_players === '' ? (
			''
		) : (
			<div className="item-tags">
				<b>{'Liczba graczy: '}</b> {item.min_players + ' - ' + item.max_players}
			</div>
		);

	const settingInfo =
		item.need_to_know_the_setting === true ? (
			<div className="item-tags">
				<b>{'Wymagana znajomość świata: '}</b> {'Tak'}
			</div>
		) : item.need_to_know_the_setting === undefined ? (
			''
		) : (
			<div className="item-tags">
				<b>{'Wymagana znajomość świata: '}</b> {'Nie'}
			</div>
		);

	const begginerFrienfdlySec =
		item.beginner_friendly === true ? (
			<div className="item-tags">
				<b>{'Przyjazna dla początkujących: '}</b> {'Tak'}
			</div>
		) : item.beginner_friendly === undefined ? (
			''
		) : (
			<div className="item-tags">
				<b>{'Przyjazna dla początkujących: '}</b> {'Nie'}
			</div>
		);

	const startTime = item.dateAndTime.withTimeZone(LocalTime.conventionTimeZone);
	const endTime = startTime.add({ minutes: item.mins });
	const endTimeStr =
		'Koniec o: ' +
		endTime.toPlainTime().toString({ smallestUnit: 'minute' }) +
		', ';
	const duration =
		configData.DURATION.SHOW_DURATION && item.mins ? (
			<div className="item-duration">
				{endTimeStr +
					configData.DURATION.DURATION_LABEL.replace('@mins', item.mins)}
			</div>
		) : (
			''
		);

	const [ref, bounds] = useMeasure();
	const showExpanded = !configData.INTERACTIVE || expanded || forceExpanded;
	const chevronExpandedClass = showExpanded ? ' item-chevron-expanded' : '';
	const chevronExpandedStyle = useSpring({
		transform: showExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
	});
	const itemExpandedStyle = useSpring({
		height: showExpanded ? bounds.height : 0,
		config: configData.EXPAND.SPRING_CONFIG,
	});

	const chevron =
		configData.INTERACTIVE && !forceExpanded ? (
			<animated.div
				className={'item-chevron' + chevronExpandedClass}
				style={chevronExpandedStyle}
			>
				<IoChevronDownCircle />
			</animated.div>
		) : (
			''
		);

	return (
		<div id={id} className="item">
			<div className="item-selection">
				<div className="selection">
					<input
						id={'select_' + id}
						type="checkbox"
						className="selection-control"
						checked={selected}
						onChange={handleSelected}
					/>
					<label htmlFor={'select_' + id}>
						{'Click to select ' + item.title}
					</label>
				</div>
			</div>
			<div className="item-group">
				<div className="item-entry" onClick={toggleExpanded}>
					<div className="item-title">
						{chevron}
						<Stack alignItems="center" direction="row">
							{item.title}
							<Stack direction="row" style={{ marginLeft: '10px' }}>
								{greenLeaf}
								{access}
								{sponsor}
								{translation}
								{signUp}
							</Stack>
						</Stack>
					</div>
					<div className="item-line2">
						<div className="item-location">{locations}</div>
						{duration}
					</div>
				</div>
				<div className="item-line2">
					<div className="item-people">
						<ul>{people}</ul>
					</div>
				</div>
				<animated.div className="item-details" style={itemExpandedStyle}>
					<div className="item-details-expanded" ref={ref}>
						{permaLink}
						{/* <div className="item-people">
              <ul>{people}</ul>
            </div> */}
						<div className="item-tags">{tags}</div>
						<div
							className="item-description"
							dangerouslySetInnerHTML={{ __html: safeDesc }}
						/>
						<div className="item-links">{links}</div>
						{ageRestrictions}
						{playersSection}
						{keywords}
						{begginerFrienfdlySec}
						{settingInfo}
						{triggers}
						{safetyTools}
					</div>
				</animated.div>
			</div>
		</div>
	);
};

ProgramItem.defaultProps = {
	forceExpanded: false,
};

ProgramItem.propTypes = {
	forceExpanded: PropTypes.bool,
};

export default ProgramItem;
