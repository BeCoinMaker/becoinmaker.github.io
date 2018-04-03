var data = (function() {
	var _data = {};

	_data.categories = [
		{
			'name': '가상화폐',
			'description': '기존의 화폐 체제를 대체하거나, 보완할 수 있는 또 다른 형태의 화폐로 사용합니다. 기존 화폐와 달리 중앙의 개입 없이 기술적인 특징을 바탕으로 생태계가 돌아갑니다.',
			'examples': [
				{
					'code': 'btc',
					'name': '비트코인',
					'description': '최초의 암호화폐',
				},
				{
					'code': 'xrp',
					'name': '리플',
					'description': '중앙제어형 암호화폐'
				}
			],
		},
		{
			'name': '투명성',
			'description': '블록체인은 일종의 분산 장부를 통해 관리됩니다. 누구나 블록체인에 저장된 정보를 볼 수 있으며, 때문에 블록체인으로 관리하는 데이터는 투명하게 공개됩니다.',
			'examples': [
				{
					'code': 'med',
					'name': '메디코인',
					'description': '의료기록'
				},
				{
					'code': 'amb',
					'name': '엠브로서스',
					'description': '식약품 유통 투명화'
				}
			]
		},
		{
			'name': '익명성/인증',
			'description': '탈 중앙화를 통해 완전한 익명성을 보장할 수 있습니다. 기존 중앙 서버 방식은 개인 정보를 보관하는지 여부를 확인할 수 없는데 반해, 블록체인은 모든 정보를 감시할 수 있습니다.',
			'examples': [
				{
					'code': 'hst',
					'name': 'HorizonState',
					'description': '투표 및 의사소통'
				}
			]
		},
		{
			'name': '위변조 방지',
			'description': '한 번 기록된 정보는 블록 내에 저장되어 절대 수정하거나 삭제할 수 없습니다. 거래 기록이나 저작물, 특허 정보 등을 블록체인으로 관리하여 위변조를 기술적으로 방지할 수 있습니다.',
			'examples': [
				{
					'code': 'cpy',
					'name': 'CopyTrack',
					'description': '디지털컨텐츠 저작권'
				}
			]
		},
		{
			'name': '에너지 거래',
			'description': '태양광 등을 이용하여 전력을 생산한 후, 남은 에너지를 판매할 수 있습니다. 중앙의 제어 없이 거래가 이루어지므로 수수료가 없고, 전력 손실을 최소화하며 효율적으로 거래를 진행할 수 있습니다.',
			'examples': [
				{
					'code': 'powr',
					'name': '파워렛저',
					'description': '개인간 에너지 거래'
				}
			]
		},
		{
			'name': '자원 공유',
			'description': '하드디스크나 CPU등 PC의 남는 자원을 공유할 수 있습니다. 더 많은 자원을 필요로 하는 사람들은 저렴한 가격에 컴퓨팅 파워를 얻을 수 있으며, 자주 이용하지 않는 사람은 합당한 대가를 받을 수 있습니다.',
			'examples': [
				{
					'code': 'storj',
					'name': '스토리지',
					'description': '클라우드 저장'
				}
			]
		},
	];


	_data.usages = {
		'가상화폐': [
			{
				'name': '송금',
				'description': '고액이나 외화 등 송금 시 과다하게 수수료가 붙는 것을 가상화폐를 통해 해결합니다',
				'availables' : {
					'platform': false,
					'private': 'any'
				}
			},
			{
				'name': '결제',
				'description': 'VISA나 MasterCard를 대체할 결제 수단을 만듭니다.',
				'availables' : {
					'platform': false,
					'private': 'any'
				}
			}
		],
		'투명성': [
			{
				'name': '음악 마켓',
				'description': '실제 사용자가 해당 음악을 들은 횟수와 다운로드 한 횟수를 기록해, 음원사의 조작을 방지합니다.',
				'availables' : {
					'platform': true,
					'private': 'public'
				}
			},
			{
				'name': '식자재 유통 추적',
				'description': '식자재의 원산지와 유통 경로 등을 추적하여 소비자가 정확한 정보를 얻을 수 있게 합니다.',
				'availables' : {
					'platform': true,
					'private': 'public'
				}
			},
			{
				'name': '의료 기록',
				'description': '환자의 기록을 네트워크에 올려 의료계에서 공정하게 기록하고, 참고할 수 있도록 합니다.',
				'availables' : {
					'platform': true,
					'private': 'any'
				}
			}
		],
		'익명성/인증': [
			{
				'name': '본인인증',
				'description': '공인인증서를 대체할 본인 인증 시스템을 만듭니다.',
				'availables' : {
					'platform': true,
					'private': 'private'
				}
			},
			{
				'name': '투표',
				'description': '익명성이 보장되고, 결과가 조작되지 않는 투표 시스템을 만듭니다.',
				'availables' : {
					'platform': true,
					'private': 'public'
				}
			}
		],
		'위변조 방지': [
			{
				'name': '저작권',
				'description': '저작물을 블록체인 네트워크에 올려서, 저작권이 있음을 보증합니다.',
				'availables' : {
					'platform': true,
					'private': 'public'
				}
			},
			{
				'name': '문서 공증',
				'description': '문서와, 해당 문서의 생성된 날짜를 네트워크에 올리고, 조작이 불가능하게 합니다.',
				'availables' : {
					'platform': true,
					'private': 'public'
				}
			}
		],
		'에너지 거래': [
			{
				'name': '전력 거래',
				'description': '태양광 등을 통해 생산한 전력을 이웃들에게 판매합니다.',
				'availables' : {
					'platform': true,
					'private': 'any'
				}
			}
		],
		'자원 공유': [
			{
				'name': '잉여 디스크 공유',
				'description': '자신의 PC의 남는 디스크 자원을 저렴하게 공급합니다.',
				'availables' : {
					'platform': false,
					'private': 'public'
				}
			},
			{
				'name': '잉여 CPU 공유',
				'description': '자신의 PC의 남는 CPU 자원을 저렴하게 공급합니다.',
				'availables' : {
					'platform': false,
					'private': 'public'
				}
			},
		],
	};

	_data.usagesFlatted = {};
	for (var category in _data.usages) {
		for (var i in _data.usages[category]) {
			var item = _data.usages[category][i];
			item.category = category;
			_data.usagesFlatted[item.name] = item;
		}
	}

	_data.pureKoreans = [['꽃가람', 'GGR'],
		['가온누리', 'GONR'],
		['그린내', 'GRN'],
		['윤슬', 'YS'],
		['물비늘', 'MBN'],
		['헤윰', 'HEYUM'],
		['나린', 'NARIN'],
		['아리아', 'ARIA'],
		['수피아', 'SUPIA'],
		['푸실', 'PUSIL'],
		['단미', 'DANMI'],
		['아토', 'ATTO'],
		['물마', 'MULMA'],
		['라온', 'RAON'],
		['베리', 'BERI'],
		['하제', 'HAJE'],
		['초아', 'CHOA'],
		['바오', 'BAO'],
		['벗', 'BEOT'],
		['새라', 'SAERA'],
		['아람', 'ARAM'],
		['즈믄', 'ZMN']
	];

	_data.statics = {
		'private': {
			'PUBLIC': {
				'title': '공개형 (Public)',
				'icon': 'fas fa-globe',
				'description1': '누구나 블록체인 상의 기록을 볼 수 있고, 채굴을 통해 보상을 획득할 수 있습니다. 보상을 획득하기 위한 자발적 참여로 생태계가 작동합니다.',
				'description2': '운영비용 최소화 / 코인 발행필요'
			},
			'PRIVATE': {
				'title': '페쇄형 (Private)',
				'icon': 'fas fa-lock',
				'description1': '관리 주체에 의해서 모든 정보가 관리되고, 거래가 이루어집니다. 채굴 개념은 없으며 중앙에 의한 관리를 통해 생태계가 돌아갑니다.',
				'description2': '운영비용 발생 / 코인 발행여부 선택적'
			}
		},
		'platform': {
			'SELF': {
				'title': '직접구축',
				'icon': 'fas fa-wrench',
				'description': '코인을 활성화하기 위해서 수만 대 이상의 노드가\n여러분의 정책에 동의하고 채굴을 진행해야합니다.'
			},
			'ETH': {
				'title': '이더리움(ETH) 활용',
				'icon': 'cc ETH-alt',
				'description': '이더리움은 가장 보편적인 블록체인 플랫폼으로,\n그 사용자는 전체 암호화폐 중 2위에 달합니다.'
			},
			'QTUM': {
				'title': '퀀텀(QTUM) 활용',
				'icon': 'cc QTUM',
				'description': '비트코인과 이더리움의 장점을 합친,\n최근 생겨난 블록체인 플랫폼입니다.'
			}
		},
		'powpos': {
			'PoW': {
				'title': '작업증명 (PoW; Proof of Work)',
				'shortTitle': '작업증명 (PoW)',
				'icon': 'fas fa-industry',
				'description': '랜덤한 문제를 맞추는 사람이 보상을 받는 정책을 사용합니다. 보통 컴퓨팅 파워를 많이 가질 수록 보상을 받기가 유리하기에, 인프라 확장 속도가 빠르지만 자원을 낭비하는 경향이 큽니다. 초기에 만들어진 기술이며, 비트코인을 비롯한 대부분의 암호화폐가 PoW를 사용합니다.'
			},
			'PoS': {
				'title': '지분증명 (PoS; Proof of Stake)',
				'shortTitle': '지분증명 (PoS)',
				'icon': 'fas fa-balance-scale',
				'description': '채굴 대신 “합의” 라는 정책을 통해서 블록체인을 관리합니다. 많은 코인을 보유할 수록 많은 배당금을 받습니다.  배당을 위해 코인을 사용하지 않고 저축만 하는 경향이 강해 인프라 확장 속도가 느리며, 유통량이 적어집니다. 소수의 신규 코인이 사용중입니다. '
			}
		}
	};


	return _data;
})();