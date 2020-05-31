module.exports = function CollectBalls (mod) {
	mod.hook('S_SPAWN_NPC', 11, (event) => {
		// 屏蔽 風之沙漠幽靈
		if (event.huntingZoneId == 630 && [2101, 2102].includes(event.templateId)) {
			return false
		}
		// 屏蔽 火之精髓
		if (event.huntingZoneId == 630 && [2001, 3001, 3003].includes(event.templateId)) {
			return false
		}
		// 触发 風之精髓
		if (event.huntingZoneId == 630 && [2000, 3000, 3002].includes(event.templateId)) {
			mod.send('C_TRY_NPC_INTERACTION', 1, {
				target: event.gameId,
				loc: event.loc
			})
		}
		// 屏蔽 電能生成裝置
		/* if (event.huntingZoneId == 631 && [1001, 1002].includes(event.templateId)) {
			return false
		} */
		// 触发 電能精髓
		if (event.huntingZoneId == 631 && event.templateId == 4001) {
			mod.send('C_TRY_NPC_INTERACTION', 1, {
				target: event.gameId,
				loc: event.loc
			})
		}
	})
}
